// "use client";
import axios from 'axios';
import { useRouter } from 'next/router';
// pages/UniversityList.tsx
import React, { useState, useEffect } from 'react';
import ListComponent from '../../components/ListComponent';

interface University {
  name: string;
  // Add other properties based on the API response
}

const api = axios.create({
  baseURL: 'http://universities.hipolabs.com', // Replace with your API base URL
});

const UniversityList: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const router = useRouter()

  const fetchUniversities = async () => {
    try {
      const response = await api.get(`/search?country=United+States`);
      setUniversities(response.data);
    } catch (error) {
      console.error('Error fetching universities:', error);
    }
  };


  useEffect(() => {

    fetchUniversities();
  }, []);

  
  return (
    <div>
      <h2>University List</h2>
      {/* <ul>
        {universities.map((university) => (
          <li onClick={()=>router.push('/1')} key={university.name}>{university.name}</li>
        ))}
      </ul> */}
      <ListComponent data={universities}/>
    </div>
  );
};

export default UniversityList;
