import React, { useState } from "react";
import { Checkbox, Form } from "element-react";

const TestListView = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [form, setForm] = useState({
    name: "",
    region: "",
    date1: null,
    date2: null,
    delivery: false,
    type: [],
    resource: "",
    desc: "",
  });

  const handleCheck = (key: any, value: any) => {
    console.log(key, value);
  };

  return (
    <Form>
      <Form.Item>
        <Checkbox.Group
          value={form.type}
          onChange={(event) => handleCheck(event, "type")}
        >
          <Checkbox label="무제한" name="type"></Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </Form>
  );
};

export default TestListView;
