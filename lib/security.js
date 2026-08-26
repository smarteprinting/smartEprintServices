import { parsePhoneNumberFromString } from 'libphonenumber-js';

const requestLog = new Map();

const limits = {
  appointment: { windowMs: 5 * 60 * 1000, max: 15 },
  contact: { windowMs: 5 * 60 * 1000, max: 15 },
};

export function getClientIp(request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

export function isRateLimited(request, bucket) {
  const limit = limits[bucket];
  const key = `${bucket}:${getClientIp(request)}`;
  const now = Date.now();
  const recent = (requestLog.get(key) || []).filter((timestamp) => now - timestamp < limit.windowMs);

  recent.push(now);
  requestLog.set(key, recent);
  return recent.length > limit.max;
}

export function validateText(value, maxLength) {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;
}

export function validateEmail(value) {
  return validateText(value, 254) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function validatePhone(value) {
  if (!validateText(value, 30)) return false;

  try {
    const phoneNumber = parsePhoneNumberFromString(value.trim());
    return Boolean(phoneNumber && phoneNumber.isValid());
  } catch {
    return false;
  }
}

export async function verifyTurnstile(token, request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token || typeof token !== 'string') return false;

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: getClientIp(request),
      }),
    });

    if (!response.ok) return false;
    const result = await response.json();
    return result.success === true;
  } catch {
    return false;
  }
}

export function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[character]));
}