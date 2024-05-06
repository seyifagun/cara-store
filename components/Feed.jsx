"use client";
import Head from '@/components/Head';
import { categories } from "@data";
import WorkList from "../../d2__ecommerce/components/Worklist";
import { useEffect, useState } from "react";
import "@styles/Categories.scss";
import Loader from "./Loader";
import {CardImage} from "./HeroImages"
import DummyCard from "./DummyCard"
import images from "../public/images"

const Feed = () => {
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [workList, setWorkList] = useState([]);
  
  const getWorkList = async () => {
    const response = await fetch(`/api/work/list/${selectedCategory}`);
    const data = await response.json();
    setWorkList(data);
    setLoading(false);
  };

  useEffect(() => {
    getWorkList();
  }, [selectedCategory]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Head title='Cara Arts | Contact Us' />
      <div className="categories">
        {categories?.map((item, index) => (
          <p
            onClick={() => setSelectedCategory(item)}
            className={`${item === selectedCategory ? "selected" : ""}`}
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
      <WorkList data={workList} />
    </>
  );
};

export default Feed;
