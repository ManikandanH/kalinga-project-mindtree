import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import DialogBox from '../Components/CustomDialogBox/'
import Button from "@material-ui/core/Button";


configure({ adapter: new Adapter() });

describe("<DialogBox />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DialogBox />);
  });

  it("Open Dialog Open", () => {
    wrapper.setProps({
      open:true,
      title:"Testing Dialog Box",
      handleConfirm:()=>{},
      handleClose:()=>{}
    });
    expect(wrapper.contains("Testing Dialog Box")).toEqual(true);
    expect(wrapper.find(Button)).toHaveLength(2);
    
    
  });
});
