// utils/sort.ts

interface Sortable {
  order?: string;
  [key: string]: unknown; // Allow any other properties
}

/**
 * Sorts an array of objects based on the 'order' string property using localeCompare.
 *
 * @param array The array to sort.
 * @returns A new sorted array.
 */
export function sortByOrder<T extends Sortable | undefined>(array: T[]): T[] {
  if (!array || !Array.isArray(array)) {
    console.warn("sortByOrder: Input is not a valid array.");
    return []; // Or return a copy of the original array:  return [...(array || [])];
  }

  const arrayCopy = [...array]; // Create a shallow copy

  return arrayCopy.sort((a, b) => {
    const valueA = a.order;
    const valueB = b.order;

    // Handle null, undefined, and non-string values gracefully
    const stringA = typeof valueA === "string" ? valueA : "";
    const stringB = typeof valueB === "string" ? valueB : "";

    return stringA.localeCompare(stringB);
  });
}

export default sortByOrder;
