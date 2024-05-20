export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };
  
  export const capitalize = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  