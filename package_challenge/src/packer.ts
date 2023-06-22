import * as fs from 'fs';

interface Item {
  index: number;
  weight: number;
  cost: number;
}

export class Packer {
  public static pack(filePath: string): string {
    const lines = fs.readFileSync(filePath, 'utf-8').split('\n');
    const results: string[] = [];

    // Process each line/test case
    for (const line of lines) {
      const { weightLimit, items } = this.parseLine(line); // Parse the line to extract weight limit and items
      const selectedItems = this.selectItems(weightLimit, items);
      const indices = selectedItems.map((item) => item.index).join(','); // Extract the indices of selected items

      results.push(indices || '-'); // Add the result to the results array
    }

    return results.join('\n'); // Return the results as a string, joined by newline character
  }

  private static parseLine(line: string): {
    weightLimit: number;
    items: Item[];
  } {
    const parts = line.split(':');
    const weightLimit = parseInt(parts[0].trim()); // Extract the weight limit from the line
    const itemsData = parts[1].trim().split(' ');

    const items = itemsData.map((itemStr) => {
      const itemData = itemStr.slice(1, -1).split(',');
      const index = parseInt(itemData[0]);
      const weight = parseFloat(itemData[1]);
      const cost = parseInt(itemData[2].slice(1));

      return { index, weight, cost }; // Create an item object with index, weight, and cost
    });

    return { weightLimit, items }; // Return the weight limit and items as an object
  }

  private static selectItems(weightLimit: number, items: Item[]): Item[] {
    let maxCost = 0;
    let maxCostItems: Item[] = [];

    const backtrack = (
      currentIndex: number,
      currentWeight: number,
      currentCost: number,
      selectedItems: Item[]
    ) => {
      if (currentWeight > weightLimit) {
        return; // Skip the current branch if weight limit is exceeded
      }

      // Update the maximum cost and selected items if a better solution is found
      if (
        currentCost > maxCost ||
        (currentCost === maxCost &&
          currentWeight < this.getTotalWeight(maxCostItems))
      ) {
        maxCost = currentCost;
        maxCostItems = selectedItems.slice();
      }

      // Base case: Reached the end of items array
      if (currentIndex === items.length) {
        return;
      }

      const currentItem = items[currentIndex];

      // Include the current item and continue with the next item
      selectedItems.push(currentItem);
      backtrack(
        currentIndex + 1,
        currentWeight + currentItem.weight,
        currentCost + currentItem.cost,
        selectedItems
      );
      selectedItems.pop(); // Remove the current item

      // Exclude the current item and continue with the next item
      backtrack(currentIndex + 1, currentWeight, currentCost, selectedItems);
    };

    backtrack(0, 0, 0, []);

    return maxCostItems;
  }

  private static getTotalWeight(items: Item[]): number {
    return items.reduce((totalWeight, item) => totalWeight + item.weight, 0);
  }
}
