import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
  isLoading: true,
  error: null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        const categoryMap = await getCategoriesAndDocuments("categories");
        setCategoriesMap(categoryMap);
      } catch (error) {
        setError(error);
      }
    };

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap, error }}>
      {children}
    </CategoriesContext.Provider>
  );
};
