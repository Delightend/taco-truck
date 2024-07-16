import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { MenuItem } from '../types/MenuItem';
import CategoryTabs from './CategoryTabs';
import { CartItemType } from '../types/CartItemType';

const MENU_URL = 'https://virtserver.swaggerhub.com/Detroit_Labs/Taco_Truck/1.0.0/menu';

interface MenuProps {
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
};

export default function Menu({
  addToCart,
  removeFromCart
}: MenuProps) {
  const [loading, setLoading] = useState<Boolean>();
  const [categoriesArray, setCategoriesArray] = useState<string[]>([]);
  const [tacos, setTacos] = useState<MenuItem[]>([]);
  const [drinks, setDrinks] = useState<MenuItem[]>([]);
  
  useEffect(() => {
    setLoading(true);
    axios.get(MENU_URL)
      .then(response => {
        setLoading(false);
        const items = response.data;
        const categories = 
          items.map((obj: MenuItem) => obj['category']);
        const uniqueCategoriesSet = 
          new Set(categories);
        const distinctCategories =
          Array.from(uniqueCategoriesSet);
        setCategoriesArray(distinctCategories as string[]);
        categories.forEach((category: string) => {
          if (category === "Tacos") {
            setTacos(items.filter((item: MenuItem) => 
              category.includes(item.category))
              .sort((a: { name: string; }, b: { name: string; }) =>
                (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
          } else {
            setDrinks(items.filter((item: MenuItem) =>
              category.includes(item.category))
              .sort((a: { name: string; }, b: { name: string; }) =>
                (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
          }
        })
      })
      .catch(error => {
        console.log('Error fetching menu',error);
      });
  }, []);

  return (
      <>
      {(loading) ? 
        <CircularProgress color="secondary" />
        :
        <>
          <CategoryTabs
            categories={categoriesArray}
            tacos={tacos}
            drinks={drinks}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </>
      }  
    </>
    );
  }