import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import CardCustomized from '../Components/CardCustomized'

configure({ adapter: new Adapter() });

describe("<Card Customized />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardCustomized product={{
        Title: "Cretta 10 seat Sofa",
        amount:12000,
        Image: "https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d",
          
      }}/>)});

    it("Should display Cretta 10 seat Sofa", () => {
        expect(wrapper.contains("Cretta 10 seat Sofa")).toEqual(true);
         
      });   
  });
