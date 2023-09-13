/**
 * Represents a recipe entity in the application.
 */
export class Recipe {
    
    private _name: string;

    private _description: string;

    private _imagePath: string;

    /**
     * Initializes a new instance of the Recipe class.
     * @param name - The name of the recipe.
     * @param description - A brief description of the recipe.
     * @param imagePath - The file path or URL to the image associated with the recipe.
     */
    constructor(name: string, description: string, imagePath: string) {
        this._name = name;
        this._description = description;
        this._imagePath = imagePath;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }


    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get imagePath(): string {
        return this._imagePath;
    }

    set imagePath(imagePath: string) {
        this._imagePath = imagePath;
    }
}
