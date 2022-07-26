import axios from "axios";
import { useEffect, useState } from "react";
import { ListProps } from "react-admin";
import "./dashboard.css";

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  registrationDate: Date;
  userPicture: string;
  password: string;
  idTheme: number;
  idLanguage: number;
  idRight: number;
}
interface IArticle {
  id: number;
  title: string;
  idUser: number;
  mainImage: string;
  mainContent: string;
  creationDate: Date;
  lastUpdateDate: Date;
}

interface IComment {
  id: number;
  title: string;
  text: string;
  date: Date;
  report: boolean;
  idUser: number;
  idArticle: number;
}

interface IPackage {
  id: number;
  name: string;
  description: string;
}

interface ICategorie {
  id: number;
  name: string;
  description: string;
}
const Dashboard = (props: ListProps) => {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();

  //GET ALL USERS
  const [userList, setUserList] = useState<IUser[]>();

  useEffect(() => {
    const getAllUsers = async () => {
      const url = `${import.meta.env.VITE_DB_URL}api/users`;
      const { data } = await axios.get(url);
      setUserList(data);
    };

    getAllUsers();
  }, []);

  //GET ALL ARTICLES
  const [articleList, setArticleList] = useState<IArticle[]>();

  useEffect(() => {
    const getAllArticles = async () => {
      const url = `${import.meta.env.VITE_DB_URL}api/articles`;
      const { data } = await axios.get(url);
      setArticleList(data);
    };
    console.log();
    getAllArticles();
  }, []);

  //GET ALL PACKAGES
  const [packageList, setPackageList] = useState<IPackage[]>();

  useEffect(() => {
    const getAllPackages = async () => {
      const url = `${import.meta.env.VITE_DB_URL}api/packages`;
      const { data } = await axios.get(url);
      setPackageList(data);
    };

    getAllPackages();
  }, []);

  //GET ALL CATEGORIES
  const [categorieList, setCategorieList] = useState<ICategorie[]>();

  useEffect(() => {
    const getAllCategories = async () => {
      const url = `${import.meta.env.VITE_DB_URL}api/categories`;
      const { data } = await axios.get(url);
      setCategorieList(data);
    };

    getAllCategories();
  }, []);
  //GET ALL COMMENTS
  const [commentList, setCommentList] = useState<IComment[]>();

  useEffect(() => {
    const getAllComments = async () => {
      const url = `${import.meta.env.VITE_DB_URL}api/comments`;
      const { data } = await axios.get(url);
      setCommentList(data);
    };

    getAllComments();
  }, []);
  return (
    <div className='dashboard'>
      <h2 className='date'>
        {today.toLocaleString("fr-FR", { weekday: "long" }).toUpperCase()}{" "}
        {today.toLocaleString("fr-FR").slice(0, 5)} {time}
      </h2>
      <h1 className='title'>Bienvenue sur la plateforme *Net Admin</h1>
      <div className='cards'>
        <div className='element'>
          <h2>- Users -</h2>
          <p>Number of users</p>
          <h3>{userList?.length}</h3>
          <p>Last user created</p>
          <h2>
            {userList &&
              userList
                .slice(-1)[0]
                .registrationDate.toLocaleString("fr-FR")
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("/")}
          </h2>
        </div>
        <div className='element'>
          <h2>- Articles -</h2>
          <p>Number of articles</p>
          <h3>{articleList?.length}</h3>
          <p>Updated on</p>
          <h2>
            {articleList &&
              articleList
                .slice(-1)[0]
                .lastUpdateDate.toLocaleString("fr-FR")
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("/")}
          </h2>
        </div>

        <div className='element'>
          <h2>- Packages -</h2>
          <p>Number of packages</p>
          <h3>{packageList?.length}</h3>
        </div>

        <div className='element'>
          <h2>- Categories -</h2>
          <p>Number of categories</p>
          <h3>{categorieList?.length}</h3>
        </div>

        <div className='element'>
          <h2>- Comments -</h2>
          <p>Number of comments</p>
          <h3>{commentList?.length}</h3>
          <p>Last Comment</p>
          <h2>
            {commentList &&
              commentList
                .slice(-1)[0]
                .date.toLocaleString("fr-FR")
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("/")}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
