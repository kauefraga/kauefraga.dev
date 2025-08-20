export function copyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => true)
      .catch(() => {
        return fallbackCopy(text);
      });
  } else {
    return fallbackCopy(text);
  }

  return false;
}

function fallbackCopy(text: string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  document.body.appendChild(textarea);

  textarea.select();

  try {
    document.execCommand('copy');
  } catch {
    return false;
  }

  document.body.removeChild(textarea);
  return true;
}
