import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import { Pie } from "react-chartjs-2";
import ProductStatistics from '../Containers/Admin/Dashboard/ProductStatistics/'

configure({ adapter: new Adapter() });
describe("<ExpansionPanel />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProductStatistics />);
  });
  
  it("should have Pie Chart", () => {
    wrapper.setProps({
    productStatistics:[0,5,5,5,3]
    });
    expect(wrapper.find(Pie)).toHaveLength(1);
  });
  
   
 
});
