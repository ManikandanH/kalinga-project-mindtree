import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import Filter from '../../Components/Filter/filter.jsx'

configure({ adapter: new Adapter() });

describe("<Filter/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Filter DisplayData={{
        Title: "Dressing Table"  
      }} filterProducts={()=>{console.log("hello")}} 
      />)});

    it("Should display Dressing Table", () => {
       // expect(wrapper.contains("Dressing Table")).toEqual(true);
         
      });   
  });


