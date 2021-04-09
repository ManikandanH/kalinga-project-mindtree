import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import ExpansionPanel from "../Components/ExpansionPanelCustomized/index.jsx";
import Button from "@material-ui/core/Button";

configure({ adapter: new Adapter() });
describe("<ExpansionPanel />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ExpansionPanel />);
  });
  
  it("should have summary1 and summary2", () => {
    wrapper.setProps({
      summary1: "Summary1",
      summary2: "Summary2",
      children: "Print this"
    });
    expect(wrapper.contains("Print this")).toEqual(true);
    expect(wrapper.contains("Summary1")).toEqual(true);
    expect(wrapper.contains("Summary2")).toEqual(true);
  });
  
  it("should have Button", () => {
    wrapper.setProps({
      actions: [
        {
          actionTitle: "Delete Seller",
          color: "secondary",
          actionCallback: () => {}
        },
        {
            actionTitle: "Delete Seller",
            color: "secondary",
            actionCallback: () => {}
          }
      ]
    });
    expect(wrapper.find(Button)).toHaveLength(2);
   
  });
});
