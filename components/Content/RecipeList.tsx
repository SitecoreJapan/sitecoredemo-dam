import { Recipe } from "@/interfaces/content";
import Link from "next/link";
import RecipeCard from "./RecipeCard";

interface Props {
  content: Recipe[];
}

export default function RecipeList({ content }: Props) {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 pt-10">
          {content.map((item) => (
            <article
              key={item.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <RecipeCard recipe={item} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
