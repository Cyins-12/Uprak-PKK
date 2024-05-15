import React from 'react'
import NovelCard from '../component/NovelCard.jsx';
import Footer from '../component/Footer.jsx';
import Navbar from '../component/Navbar.jsx';

const page = () => {
  return (
    <div>
        <Navbar/>
        <div>
        <NovelCard
        rank="1" 
        tittle="The Dark Of Maturity"
        author="John Doe" 
        description="The Dark Of Maturity, menceritakan peri jahat yang tinggal di kota Maturity. Dulunya peri tersebut baik, tetapi sekarang peri ini berubah jahat setelah peristiwa tragis, dan sekarang meneror kota dengan sihir hitamnya. Penduduk hidup dalam ketakutan, mencari cara untuk menghentikan kegelapan dan memulihkan kedamaian."
        views="1000" 
        favorites="500" 
        saved="200" 
      />   
        </div>
        <Footer/>
    </div>
  )
}

export default page