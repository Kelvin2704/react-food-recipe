export const foodImages = [
  "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1563865436874-9aef32095fad?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1615366105533-5b8f3255ea5d?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85",
];

export const fallbackRecipes = [
  { id: 654959, title: "Herby green goddess bowl", image: foodImages[0], readyInMinutes: 25, servings: 2, category: "Fresh & bright" },
  { id: 716429, title: "Roasted vegetable harvest", image: foodImages[1], readyInMinutes: 35, servings: 4, category: "Weeknight" },
  { id: 715538, title: "Garden table mezze", image: foodImages[2], readyInMinutes: 30, servings: 3, category: "Share plate" },
  { id: 644387, title: "Crisp seasonal greens", image: foodImages[3], readyInMinutes: 20, servings: 2, category: "Vegetarian" },
  { id: 782601, title: "Citrus summer salad", image: foodImages[4], readyInMinutes: 15, servings: 2, category: "Light lunch" },
  { id: 663050, title: "Slow Sunday kitchen", image: foodImages[5], readyInMinutes: 45, servings: 4, category: "Comfort food" },
];

export const fallbackDetail = {
  id: 654959,
  title: "Herby green goddess bowl",
  image: foodImages[0],
  readyInMinutes: 35,
  servings: 2,
  healthScore: 92,
  sourceName: "The Savory Kitchen",
  extendedIngredients: [
    { id: 1, original: "2 cups mixed seasonal greens" },
    { id: 2, original: "1 ripe avocado, sliced" },
    { id: 3, original: "1 cup roasted chickpeas" },
    { id: 4, original: "½ cup cucumber ribbons" },
    { id: 5, original: "¼ cup fresh herbs" },
    { id: 6, original: "2 tbsp lemon tahini dressing" },
  ],
  steps: [
    "Wash and dry the greens, herbs and cucumber. Slice the avocado just before assembling.",
    "Arrange the greens in a wide bowl, then layer in chickpeas, cucumber and avocado.",
    "Drizzle with lemon tahini dressing, season generously and finish with torn herbs.",
  ],
};
