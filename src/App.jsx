import React from 'react';

const AnimatedHoverCardWithBall = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-64 h-48 bg-white shadow-lg rounded-lg overflow-hidden group">
        {/* Card Content */}
        <img
          src="https://img.freepik.com/free-photo/container-ship-unloading-commercial-dock-dusk-generated-by-ai_188544-46989.jpg?ga=GA1.1.336103943.1722933846&semt=ais_hybrid"
          alt="Card"
          className="w-full h-full object-cover"
        />

        {/* Bouncing Ball */}
        <div className="absolute inset-0 flex justify-center items-center group-hover:hidden">
          <div className="  rounded-full animate-bounce">
            <img src="https://www.yhcargoindia.com/public/uploads/service/1668331485_Haulage.png" className=' w-16 h-16  align-ceter' alt="" />
          </div>
        </div>

        {/* Hover Layer with Animation */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
          <p className="text-white text-lg font-semibold">Hovered Text</p>
        </div>
      </div>

      <div className="relative w-64 h-48 bg-white shadow-lg rounded-lg overflow-hidden group">
        {/* Card Content */}
        <img
          src="https://img.freepik.com/free-photo/container-ship-unloading-commercial-dock-dusk-generated-by-ai_188544-46989.jpg?ga=GA1.1.336103943.1722933846&semt=ais_hybrid"
          alt="Card"
          className="w-full h-full object-cover"
        />

        {/* Bouncing Ball */}
        <div className="absolute inset-0 flex justify-center items-center group-hover:hidden">
          <div className="  rounded-full animate-bounce">
            <img src="https://www.yhcargoindia.com/public/uploads/service/1668331485_Haulage.png" className=' w-16 h-16  align-ceter' alt="" />
          </div>
        </div>

        {/* Hover Layer with Animation */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
          <p className="text-white text-lg font-semibold">Hovered Text</p>
        </div>
      </div>

      <div className="relative w-64 h-48 bg-white shadow-lg rounded-lg overflow-hidden group">
        {/* Card Content */}
        <img
          src="https://img.freepik.com/free-photo/container-ship-unloading-commercial-dock-dusk-generated-by-ai_188544-46989.jpg?ga=GA1.1.336103943.1722933846&semt=ais_hybrid"
          alt="Card"
          className="w-full h-full object-cover"
        />

        {/* Bouncing Ball */}
        <div className="absolute inset-0 flex justify-center items-center group-hover:hidden">
          <div className="  rounded-full animate-bounce">
            <img src="https://www.yhcargoindia.com/public/uploads/service/1668331485_Haulage.png" className=' w-16 h-16  align-ceter' alt="" />
          </div>
        </div>

        {/* Hover Layer with Animation */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
          <p className="text-white text-lg font-semibold">Hovered Text</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHoverCardWithBall;
