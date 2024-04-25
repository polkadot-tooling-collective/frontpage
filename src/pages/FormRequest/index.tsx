import { Button, Card, Form, Input, Select, Space, Typography } from "antd";

import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { colors } from "consts";
import YAML from "yaml";
import { useState } from "react";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

type EvidenceType = {
  title: string;
  links: string;
};

type FormItem = {
  category: "core_tooling" | "d_app_tooling";
  title: string;
  tasks: [EvidenceType];
};

type FormType = {
  about: string;
  address: string;
  github: string;
  evidence: [FormItem];
  name: string;
  motivation: string;
};

const { Paragraph } = Typography;

export const FormRequest = () => {
  const [form] = Form.useForm();
  const [format, setFormat] = useState({});
  const [isForm, setIsForm] = useState<boolean>(true);

  const formatAndPrepare = (values: FormType) => {
    const { name, address, github, about, motivation, evidence } = values;
    setFormat({
      collective: "Potoc",
      member: {
        name,
        address,
        github,
        rank: 0,
      },
      date: new Date(),
      about: about.toString(),
      motivation: motivation.toString(),
      evidence: evidence.map((ev) => ({
        title: ev.title,
        category: ev.category,
        tasks: ev.tasks.map((t) => ({
          title: t.title,
          links: [t.links],
        })),
      })),
    });
    setIsForm(false);
  };

  return (
    <>
      <div className="header">
        <h1>Join Request</h1>
      </div>
      {isForm ? (
        <>
          <p style={{ padding: "0rem 2rem 1rem 3rem" }}>
            Complete the following form, to automatically open a request PR to
            join the Tooling Collective.
          </p>
          <Form
            {...formItemLayout}
            form={form}
            name="joinRequest"
            onFinish={() => {
              formatAndPrepare(form.getFieldsValue());
            }}
            initialValues={{ evidence: [{}] }}
            style={{ maxWidth: "75%" }}
            scrollToFirstError
          >
            <h4>Member details</h4>

            <Form.Item
              name="address"
              label="Address"
              tooltip="On-chain address of the member. Can be a Substrate, Polkadot or Collectives Address."
              rules={[
                {
                  required: true,
                  message: "Please input your address",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="github"
              label="Github Handle"
              tooltip="Add your github handle name/username."
              rules={[
                {
                  required: true,
                  message: "Please add your github handle",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="name"
              label="Legal name/Pseudonym"
              tooltip="The legal name or pseudonym of the member."
              rules={[
                {
                  required: true,
                  message: "Please add your github handle",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="about"
              label="About"
              tooltip="Bio/about section of the requester"
              rules={[
                { required: true, message: "Fill information about yourself." },
              ]}
            >
              <Input.TextArea showCount maxLength={1000} />
            </Form.Item>

            <Form.Item
              name="motivation"
              label="Motivation"
              tooltip="Motivation of the requester for joining the collective."
              rules={[
                {
                  required: true,
                  message: "Fill the motivation for joining the collective.",
                },
              ]}
            >
              <Input.TextArea showCount maxLength={1000} />
            </Form.Item>

            <h4>Evidence</h4>

            <Form.Item
              label="Evidences"
              tooltip="Fill a specific piece of evidence to help underpin an argument. Fill the
          description and the link of a task that was either solely completed by
          the reporter or in collaboration with others."
            >
              <Form.List name="evidence">
                {(fields, { add, remove }) => (
                  <div
                    style={{
                      display: "flex",
                      rowGap: 16,
                      flexDirection: "column",
                    }}
                  >
                    {fields.map((field) => (
                      <Card
                        size="small"
                        title={`Evidence ${field.name + 1}`}
                        key={field.key}
                        extra={
                          <IoMdClose
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        }
                      >
                        <Form.Item
                          name={[field.name, "title"]}
                          label="Title"
                          tooltip="Title of this piece of evidence."
                          rules={[
                            {
                              required: true,
                              message: "Please add your evidence's title",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          name={[field.name, "category"]}
                          label="Category"
                          rules={[
                            {
                              required: true,
                              message: "Please select a category.",
                            },
                          ]}
                        >
                          <Select placeholder="Please select a category for your evidence.">
                            <Option value="core_tooling">Core Tooling</Option>
                            <Option value="d_app_tooling">dApp Tooling</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item label="Tasks">
                          <Form.List name={[field.name, "tasks"]}>
                            {(subFields, subOpt) => (
                              <>
                                {subFields.map((subField) => (
                                  <Space
                                    key={subField.key}
                                    style={{ display: "flex", marginBottom: 8 }}
                                    align="baseline"
                                  >
                                    <Form.Item
                                      name={[subField.name, "title"]}
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing title",
                                        },
                                      ]}
                                    >
                                      <Input placeholder="Task Title" />
                                    </Form.Item>
                                    <Form.Item
                                      name={[subField.name, "links"]}
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing link",
                                        },
                                      ]}
                                    >
                                      <Input placeholder="Task Link" />
                                    </Form.Item>
                                    <FaMinusCircle
                                      style={{
                                        color: colors.primary,
                                        cursor: "pointer",
                                      }}
                                      onClick={() =>
                                        subOpt.remove(subField.name)
                                      }
                                    />
                                  </Space>
                                ))}
                                <Form.Item>
                                  <Button
                                    type="dashed"
                                    onClick={() => subOpt.add()}
                                    block
                                    icon={
                                      <FaPlusCircle
                                        style={{ color: colors.primary }}
                                      />
                                    }
                                  >
                                    Add field
                                  </Button>
                                </Form.Item>
                              </>
                            )}
                          </Form.List>
                        </Form.Item>
                      </Card>
                    ))}

                    <Button type="dashed" onClick={() => add()} block>
                      + Add Evidence
                    </Button>
                  </div>
                )}
              </Form.List>
            </Form.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="primary" htmlType="submit">
                Create YAML
              </Button>
            </div>
          </Form>
        </>
      ) : (
        <>
          <p style={{ padding: "0rem 2rem 1rem 3rem" }}>
            Now you can copy the YAML file below by clicking here:{" "}
            <Paragraph
              style={{ display: "contents" }}
              copyable={{
                text: YAML.stringify(format, null, 2),
              }}
            />{" "}
            (will copy the following text);
          </p>
          <Paragraph style={{ margin: "2rem", maxWidth: "70vw" }}>
            <pre style={{ border: "none", padding: "2rem" }}>
              {YAML.stringify(format, null, 2)}
            </pre>
          </Paragraph>
          <p style={{ padding: "0rem 2rem 1rem 3rem" }}>
            and{" "}
            <a
              href="https://github.com/polkadot-tooling-collective/collective/new/master/join_request"
              target="_blank"
              rel="noreferrer"
            >
              create a new PR at the Tooling Collective Github repository.
            </a>
          </p>
          <Button
            style={{ margin: "2rem" }}
            type="primary"
            onClick={() => {
              setIsForm(true);
            }}
          >
            Return to Form
          </Button>
        </>
      )}
    </>
  );
};
