export function formatDate(dateString: Date | null) {
  // If the date is missing (e.g., a current job), return "Present"
  if (!dateString) {
    return 'Present';
  }

  const date = new Date(dateString + 'T00:00:00');
  
  // Format to show only month and year, which is common for resumes
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  }).format(date);
}