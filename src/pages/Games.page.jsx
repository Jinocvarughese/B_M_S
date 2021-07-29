import React from 'react';

//component
import Poster from '../components/Poster/Poster.component';
import PlaysFilter from '../components/PlaysFilter/PlaysFilter.component';

const Games = () => {
    return (
        <>  
        
      <div className="container mx-auto px-4">

          <div className="w-full lg:flex lg:flex-row-reverse">

          <div className="lg:w-3/4">

          <h2 className="text-2xl font-bold mb-4">Games & Sports in Kerala</h2>

         <div className="flex flex-wrap ">
         
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00122514-pjdvkdvzkn-portrait.jpg"
               title="Call of Duty"
               subtitle="Online(Play from Home)"/>
             </div>

             <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
             <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312550-rkmxnlvdwg-portrait.jpg"
              title="BGMI Tournament (Solo & Squad) By VP Gaming"
              subtitle="Online(Play from Home)"/>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
             <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00134925-swezkrzhsz-portrait.jpg"
              title="Free Fire Solo And Squad (Bermuda)"
              subtitle="Online(Play from Home)"/>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
             <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312458-predlajpqx-portrait.jpg"
              title="Call Of Duty Mobile (CODM) by Big Band Sports"
              subtitle="Online(Play from Home)"/>
            </div>

         </div>
         
    </div>

    <div className="lg:w-3/12 ">
    <h2 className="text-2xl font-bold mb-4">Filters</h2>

    <div>
     <PlaysFilter title="Date"
       tags={["Today", "Tomorrow", "This Weekend"]}
      />

      <PlaysFilter title="Categories"
       tags={["Esports"]}
      />

      <PlaysFilter title="Price"
       tags={["Free", "0-500", "501-2000","above 2000"]}
      />
     </div>
    </div>
 </div>
  <div></div>
</div>

 </>
);
};

export default Games;