import Link from "next/link";
import React from "react";

interface ILangCard {
  langColor: string;
  lang: string;
  info: string;
  redirect: string;
}

const LangCard: React.FC<ILangCard> = ({ lang, langColor, info, redirect }) => {
  return (
    <article className="langCard w-full border border-[--border1] rounded-lg p-3">
      <p style={{ color: langColor }} className="text-3xl font-bold">
        {lang}
      </p>
      <div className="h-24 flex items-center md:h-20 lg:h-32">
        <p className="text-pretty my-auto">
          {info}
        </p>
      </div>
      <div className="pt-2 flex justify-end">
        <Link
          href={redirect}
          className="w-2/6 border bg-gradient-to-r from-[--border2-a] to-[--border2-b] text-[--background] rounded-lg flex justify-center items-center py-1"
        >
          MAS INFO
        </Link>
      </div>
    </article>
  );
};

export default LangCard;
