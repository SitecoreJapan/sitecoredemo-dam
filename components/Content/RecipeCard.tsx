import { Recipe } from "@/interfaces/content";
import Link from "next/link";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 ">
          <Link href="/recipe">
            <span className="absolute inset-0" />
            {recipe.recipe_Title}
          </Link>
        </h3>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={recipe.publicationDate} className="">
            {recipe.publicationDate}
          </time>
        </div>
        <p className="mt-5 line-clamp-3 text-sm leading-6 ">{recipe.brief}</p>
      </div>
    </div>
  );
}
