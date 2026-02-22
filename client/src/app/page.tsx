import {getHomePage} from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader(){
 const data = await getHomePage();
 if (!data) notFound();
 console.log(data);
 return {...data.data};
}


export default async function HomeRoute() { 
  const data = await loader();
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

// http://localhost:1338/api/home-page?populate[blocks][on][blocks.hero-section][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][logo][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][cta]=true&populate[blocks][on][blocks.info-block][populate][image][fields][0]=url&populate[blocks][on][blocks.info-block][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.info-block][populate][cta]=true
