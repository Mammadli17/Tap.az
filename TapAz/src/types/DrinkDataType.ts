// DrinkTypes.ts
export interface Drink {
    slice(i: number, arg1: number): never;
    length: number;
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strTags: string | null;
    strVideo: string | null;
    strCategory: string;
    strIBA: string | null;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: string | null;
    strInstructionsDE: string;
    strInstructionsFR: string | null;
    strInstructionsIT: string;
    strInstructionsZH_HANS: string | null;
    strInstructionsZH_HANT: string | null;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strMeasure1: string | null;
    strMeasure2: string;
    strMeasure3: string | null;
    strImageSource: string | null;
    strImageAttribution: string | null;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
}
