import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEnquiry, buildWhatsAppLink } from './enquiry.ts';

test('validates correct enquiry payload', () => {
  const result = validateEnquiry({
    fullName: 'S. K. Murthy',
    phoneNumber: '+91 98765 43210',
    requirement: 'Looking for 300 sq.yd plot in Madhurawada corridor',
    consent: true,
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('catches missing name, phone, and consent', () => {
  const result = validateEnquiry({
    fullName: '',
    phoneNumber: '123',
    requirement: '',
    consent: false,
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phoneNumber);
  assert.ok(result.errors.requirement);
  assert.ok(result.errors.consent);
});

test('generates formatted WhatsApp link with correct phone and encoded message', () => {
  const url = buildWhatsAppLink({
    fullName: 'Ravi Kumar',
    phoneNumber: '9848012345',
    requirement: 'Villa plot in Bhogapuram',
    consent: true,
  });

  assert.ok(url.startsWith('https://wa.me/918919635055?text='));
  assert.ok(url.includes('Ravi%20Kumar'));
  assert.ok(url.includes('Bhogapuram'));
});
