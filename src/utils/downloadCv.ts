/**
 * Robust CV Download & View Utility
 * Ensures Dasindu Rajapaksha's CV PDF downloads and opens properly across:
 * - Vite local development (localhost:3000)
 * - AI Studio preview iframe
 * - GitHub Pages (https://rajapaksha-rmdd.github.io/portfolio/)
 * - Custom domain deployments
 */

export const CV_FILE_NAME = 'Dasindu_Rajapaksha_CV.pdf';

/**
 * Returns prioritized list of candidate URLs for the CV PDF
 */
export function getCvDownloadUrls(): string[] {
  const candidates: string[] = [];

  if (typeof window !== 'undefined') {
    const loc = window.location;
    let pathname = loc.pathname;
    if (!pathname.endsWith('/')) {
      const lastSlash = pathname.lastIndexOf('/');
      pathname = pathname.substring(0, lastSlash + 1);
    }
    const origin = loc.origin;

    // Highest priority: document-relative absolute paths
    candidates.push(`${origin}${pathname}assets/Dasindu_Rajapaksha_CV.pdf`);
    candidates.push(`${origin}${pathname}Dasindu_Rajapaksha_CV.pdf`);
    candidates.push(`${origin}${pathname}cv.pdf`);
  }

  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  candidates.push(`${cleanBase}assets/Dasindu_Rajapaksha_CV.pdf`);
  candidates.push(`${cleanBase}Dasindu_Rajapaksha_CV.pdf`);
  candidates.push(`${cleanBase}cv.pdf`);

  candidates.push('./assets/Dasindu_Rajapaksha_CV.pdf');
  candidates.push('/assets/Dasindu_Rajapaksha_CV.pdf');
  candidates.push('./Dasindu_Rajapaksha_CV.pdf');
  candidates.push('/Dasindu_Rajapaksha_CV.pdf');
  candidates.push('./cv.pdf');
  candidates.push('/cv.pdf');

  // Deduplicate
  return Array.from(new Set(candidates));
}

/**
 * Downloads the CV PDF directly via Blob fetch or invisible anchor fallback.
 * Prevents 404 navigation and guarantees proper file naming.
 */
export async function downloadCv(e?: React.MouseEvent, fileName: string = CV_FILE_NAME): Promise<boolean> {
  if (e) {
    e.preventDefault();
  }

  const urls = getCvDownloadUrls();

  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'GET' });
      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        // Guard against Vite SPA html fallback (which is status 200 but text/html)
        if (!contentType.includes('text/html')) {
          const blob = await res.blob();
          const blobUrl = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = fileName;
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(blobUrl);
          return true;
        }
      }
    } catch {
      // Try next candidate url
    }
  }

  // Fallback: direct navigation or window.open to the primary URL
  const fallbackUrl = urls[0] || './assets/Dasindu_Rajapaksha_CV.pdf';
  const a = document.createElement('a');
  a.href = fallbackUrl;
  a.download = fileName;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  return false;
}

/**
 * Opens the CV PDF in a new browser tab
 */
export async function viewCvPdf(e?: React.MouseEvent): Promise<void> {
  if (e) {
    e.preventDefault();
  }

  const urls = getCvDownloadUrls();

  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('text/html')) {
          window.open(url, '_blank', 'noopener,noreferrer');
          return;
        }
      }
    } catch {
      // Try next
    }
  }

  window.open(urls[0] || './assets/Dasindu_Rajapaksha_CV.pdf', '_blank', 'noopener,noreferrer');
}
