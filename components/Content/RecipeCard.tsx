import { Recipe } from "@/interfaces/content";
import Link from "next/link";
import Moment from "react-moment";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  const yearmonthdate = recipe.publicationDate.slice(0, 10);
  const description = recipe?.brief || "no description";
  const metaDescription = description.replace(/<[^>]+>/g, "");

  return (
    <div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 ">
          <Link href={"/content/recipe/" + recipe.id}>
            <span className="absolute inset-0" />
            {recipe.recipe_Title}
          </Link>
        </h3>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={recipe.publicationDate} className="">
            <Moment format="YYYY/MM/DD">{yearmonthdate}</Moment>
            {}
          </time>
        </div>
        <p className="mt-5 line-clamp-3 text-sm leading-6 ">
          {metaDescription}
        </p>
      </div>
    </div>
  );
}
