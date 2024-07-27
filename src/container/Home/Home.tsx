import React from 'react';
import ClientBlockDishes from "../../components/ClientBlockDishes/ClientBlockDishes.tsx";

const Home = () => {
    return (

        <div>
          <h3 className="text-center">Dishes</h3>
            <div>
                <ClientBlockDishes/>
            </div>
        </div>
    );
};

export default Home;