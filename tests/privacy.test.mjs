import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const personalInfo = readFileSync(new URL('src/app/components/modal/PersonalInfo.tsx', root), 'utf8');
const contact = readFileSync(new URL('src/app/components/section/Contact.tsx', root), 'utf8');

// Check source, not just rendered visibility: hidden strings are still public.
test('public components contain no literal personal email or phone numbers', () => {
  for (const source of [personalInfo, contact]) {
    assert.doesNotMatch(source, /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    assert.doesNotMatch(source, /\+?\d[\d\s().-]{7,}\d/);
  }
});

test('personal profile omits sensitive identity fields', () => {
  assert.doesNotMatch(personalInfo, /meta:\s*["'](?:first name|last name|age|nationality|citizenship|address|phone|email|date of birth)["']/i);
  assert.match(personalInfo, /meta: "Based in", metaInfo: "United States \/ South Korea"/);
});

test('contact section exposes no direct email or telephone links', () => {
  assert.doesNotMatch(contact, /(?:mailto|tel):/i);
});

test('existing contact form interface is preserved', () => {
  assert.match(contact, /id="contact" ref=\{contactSectionRef\}/);
  assert.match(contact, /<form className="contact_form" ref=\{form\} onSubmit=\{sendEmail\}>/);
  for (const field of ['name', 'email', 'message']) {
    assert.ok(contact.includes(`register("${field}"`));
    assert.ok(contact.includes(`setValue("${field}"`));
  }
  assert.match(contact, /<button type="submit"/);
});
