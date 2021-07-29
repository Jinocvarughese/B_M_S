import React from 'react';

//component
import Poster from '../components/Poster/Poster.component';
import PlaysFilter from '../components/PlaysFilter/PlaysFilter.component';

const StreamingEvents = () => {
    return (
        <>  
        
      <div className="container mx-auto px-8">

          <div className="w-full lg:flex lg:flex-row-reverse">

          <div className="lg:w-3/4">

          <h2 className="text-2xl font-bold mb-4">Online Streaming Events</h2>

         <div className="flex flex-wrap ">
         
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
              <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAzIEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00130234-ruyaeddedg-portrait.jpg"
               title="RAELL PADAMSEE`S - Young Actors Club"
               subtitle="Watch on zoom"/>
             </div>

             <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
             <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307978-fpznmytnpj-portrait.jpg"
              title="Smartphone Photography - Unleash the Pro Mode"
              subtitle="Watch on zoom"/>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
             <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304931-vtqssmrjyq-portrait.jpg"
              title="Introduction to Found Poetry- A One Page Spotlight)"
              subtitle="Online Streaming"/>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
             <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00131211-rjjssxbbee-portrait.jpg"
              title="Art and Craft Online Workshop"
              subtitle="Watch on zoom"/>
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
             <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312209-wyjpkywdbj-portrait.jpg"
              title="Online Music Concert"
              subtitle="Watch on zoom"/>
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
       tags={["Kids","Comedy Shows", "Talks", "Music Shows"]}
      />

      <PlaysFilter title="Languages"
       tags={["Malayalam", "Hindi", "English","Tamil"]}
      />
     </div>
    </div>
 </div>
  <div></div>
</div>

 </>
);
};

export default StreamingEvents;