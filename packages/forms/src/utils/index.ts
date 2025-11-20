// Format phone number for display
export function formatPhoneNumber(value: string): string {
  // Remove all non-numeric characters
  const phoneNumber = value.replace(/\D/g, '');

  // Format as (XXX) XXX-XXXX
  const match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return value;
}

// Validate URL format
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Save form data to localStorage
export function saveFormProgress(data: Record<string, unknown>): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('multiStepFormData', JSON.stringify(data));
  }
}

// Load form data from localStorage
export function loadFormProgress<T>(): T | null {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('multiStepFormData');
    if (saved) {
      try {
        return JSON.parse(saved) as T;
      } catch {
        return null;
      }
    }
  }
  return null;
}

// Clear saved form data
export function clearFormProgress(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('multiStepFormData');
  }
}
