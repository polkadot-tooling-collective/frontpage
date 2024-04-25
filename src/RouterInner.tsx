/* eslint-disable prettier/prettier */
import { ConfigProvider, Divider, Layout, Menu, Modal } from "antd";
import type { GetProp, MenuProps } from "antd";
import { HiGlobeAlt, HiMiniInboxStack } from "react-icons/hi2";

import { PolkadotUrl, colors, darkTheme, lightTheme } from "consts";
import { useLocalStorage } from "usehooks-ts";

import PolkadotIcon from "./img/polkadotIcon.svg?react";
import { useTheme } from "./contexts/Themes";
import { IoSunnyOutline, IoMoon, IoLogoGithub } from "react-icons/io5";
import {
  BsArrowsCollapseVertical,
  BsArrowsExpandVertical,
} from "react-icons/bs";

import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import { ToolingCollective } from "pages/ToolingCollective";
import { Structure } from "pages/Structure";
import { FormRequest } from "pages/FormRequest";

type MenuItem = GetProp<MenuProps, "items">[number];

const pages = [
  {
    path: "",
    element: <ToolingCollective />,
  },
  {
    path: "collective",
    element: <ToolingCollective />,
  },
  {
    path: "structure",
    element: <Structure />,
  },
  {
    path: "join_form",
    element: <FormRequest />,
  },
];

const iconSize = "1.25rem";
const { Content, Footer, Sider } = Layout;

const getItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};

const getLink = (
  label: string,
  link: string = "#",
  target: "_parent" | "_blank" = "_parent",
): React.ReactNode => (
  <Link to={link} target={target}>
    {label}
  </Link>
);

const mainItems: MenuItem[] = [
  getItem(getLink("Collective", "collective"), "collective", <HiGlobeAlt />),
  getItem(getLink("Structure", "structure"), "structure", <HiMiniInboxStack />),
  getItem(getLink("Join Form", "join_form"), "join_form", <HiMiniInboxStack />),
  // getItem("About", "sub0", <FaInfo />, [
  //   getItem(
  //     getLink("Membership", "membership"),
  //     "membership",
  //     <HiMiniUserPlus />
  //   ),
  //   getItem(
  //     getLink("Governance", "governance"),
  //     "governance",
  //     <HiBuildingLibrary />
  //   ),
  //   getItem(
  //     getLink("Interactions", "interactions"),
  //     "interactions",
  //     <HiMiniCubeTransparent />
  //   ),
  //   getItem(getLink("Modules", "modules"), "modules", <HiMiniInboxStack />),
  // ]),
  // getItem(getLink("Open RFCs", "rfcs"), "rfcs", <MdDocumentScanner />),
];

// const secondaryItems: MenuItem[] = [
//   getItem("Element", "sub1", <SiElement />, [
//     getItem(
//       getLink(
//         "Members",
//         "https://matrix.to/#/#fellowship-members:parity.io",
//         "_blank"
//       ),
//       "sub1-1",
//       <SiElement />
//     ),
//     getItem(
//       getLink(
//         "Open",
//         "https://matrix.to/#/#fellowship-open-channel:parity.io",
//         "_blank"
//       ),
//       "sub1-2",
//       <IoChatbubblesOutline />
//     ),
//   ]),
// ]
//
// const linksItems: MenuItem[] = [
//   getItem(
//     getLink("RFCs Book", "https://polkadot-fellows.github.io/RFCs/", "_blank"),
//     "rfcs book",
//     <IoDocumentText />
//   ),
//   getItem(
//     getLink(
//       "Manifesto",
//       "https://github.com/polkadot-fellows/manifesto/blob/0c3df46d76625980b8b48742cb86f4d8fa6dda8d/manifesto.pdf",
//       "_blank"
//     ),
//     "manifesto",
//     <IoDocumentText />
//   ),
// ]

const type = "vertical";

export const RouterInner = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { mode, toggleTheme } = useTheme();

  const [openModal, setOpenModal] = useState(false);

  const [settings, setSettings] = useLocalStorage("fellowship-settings", {
    themeMode: "light",
    collapsed,
  });

  useEffect(() => {
    setCollapsed(settings.collapsed);
  }, [settings.collapsed]);

  const size = collapsed ? "1.8rem" : "2.2rem";
  const autoWidth = collapsed ? "4rem" : "12rem";

  const Svg = (
    <>
      <PolkadotIcon
        style={{
          maxHeight: "100%",
          width: "2rem",
          fill: colors.primary,
        }}
        width={size}
        height={size}
      />
      {!collapsed ? (
        <div
          style={{
            display: "flex",
            paddingLeft: "1rem",
            fontFamily: "Unbounded",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: colors.primary,
          }}
        >
          Tooling
        </div>
      ) : null}
    </>
  );

  return (
    <ConfigProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          theme={mode}
          width="12rem"
          breakpoint="md"
          collapsedWidth="4rem"
          collapsed={collapsed}
          onBreakpoint={(val) => {
            setCollapsed(val);
          }}
        >
          <div
            style={{
              height: "3rem",
              marginBottom: "2rem",
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              style={{ height: "4rem", display: "flex", alignItems: "center" }}
              to={PolkadotUrl}
            >
              {Svg}
            </Link>
          </div>
          <Menu
            selectedKeys={[location?.pathname.replace("/", "")]}
            theme={mode}
            mode={type}
            items={mainItems}
          />
          <Divider />
          {/* <Menu
            selectedKeys={[location?.pathname.replace("/", "")]}
            theme={mode}
            mode={type}
            items={secondaryItems}
          />
          <Divider />
          <Menu
            theme={mode}
            mode={type}
            items={[
              ...linksItems,
              getItem(
                <a href="#" onClick={() => setOpenModal(true)}>
                  Resources
                </a>,
                "resources",
                <GrResources />
              ),
            ]}
          />
           */}
          <section
            style={{
              position: "absolute",
              bottom: "6rem",
              width: collapsed ? "4rem" : "11rem",
              height: collapsed ? "7rem" : "1rem",
              display: "flex",
              flexDirection: collapsed ? "column" : "row",
              justifyContent: "space-around",
            }}
          >
            {mode === "dark" ? (
              <button
                style={{ color: colors.primary }}
                type="button"
                onClick={() => {
                  toggleTheme();
                }}
              >
                <IoSunnyOutline
                  size={iconSize}
                  style={{ color: colors.primary }}
                />
              </button>
            ) : (
              <button type="button" onClick={() => toggleTheme()}>
                <IoMoon size={iconSize} style={{ color: colors.primary }} />
              </button>
            )}
            <button
              style={{ color: colors.primary }}
              type="button"
              onClick={() => {
                console.log(settings);
                setSettings({
                  themeMode: settings.themeMode,
                  collapsed: !collapsed,
                });
              }}
            >
              {collapsed ? (
                <BsArrowsExpandVertical />
              ) : (
                <BsArrowsCollapseVertical />
              )}
            </button>
            <button
              style={{ color: colors.primary }}
              type="button"
              onClick={() =>
                window.open(
                  "https://github.com/polkadot-tooling-collective",
                  "_blank",
                )
              }
            >
              <IoLogoGithub size={iconSize} />
            </button>
          </section>
        </Sider>
        <Layout>
          <Content
            className={"theme-" + mode}
            style={{
              overflow: "auto",
              height: "100vh",
              paddingBottom: "6rem",
              marginLeft: autoWidth,
              background: "var(--background-primary)",
              color: mode === "light" ? "#00152A" : "#f8f7f7",
            }}
          >
            <Routes>
              {pages.map(({ path, element }, i) => {
                return (
                  <Route key={`page_${i}`} path={path} element={element} />
                );
              })}
            </Routes>
          </Content>
          <Modal
            centered
            open={openModal}
            onCancel={() => setOpenModal(false)}
            footer={[]}
          >
            <h4>Useful Links</h4>
            <p>
              {getLink(
                "Governance v2",
                "https://medium.com/polkadot-network/gov2-polkadots-next-generation-of-decentralised-governance-4d9ef657d11b",
                "_blank",
              )}
            </p>
            <p>
              {getLink(
                "Democracy Pallet",
                "https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/democracy/README.md",
                "_blank",
              )}
            </p>
            <Divider />
            <h4>Alternative Fellowship UIs</h4>
            <p>
              {getLink(
                "Polkassembly",
                "https://collectives.polkassembly.io/",
                "_blank",
              )}
            </p>
            <p>
              {getLink(
                "SubSquare",
                "https://collectives.subsquare.io/fellowship",
                "_blank",
              )}
            </p>
          </Modal>
          <Footer
            style={{
              position: "fixed",
              bottom: 0,
              zIndex: 1,
              width: "100vw",
              background: mode === "light" ? "#fff" : "#000D18",
              color: colors.primary,
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "flex-end",
              filter: "alpha(opacity=75)",
              opacity: "0.75",
            }}
          >
            Polkadot Tooling Collective ©{new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
