import { Modal, Row, Col, Image, Space, InputNumber, Button } from "antd";
import Block from "react-blocks";
import Layout from "antd/es/layout/layout";
import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const Cart = ({ isCartOpen, onOpenCart, products }) => {
  return (
    <>
      {products.length > 0 ? (
        <Modal
          open={isCartOpen}
          onCancel={(e) => onOpenCart(e, false)}
          footer={[]}
        >
          {products.map((p) => {
            return (
              <Row justify="center">
                <Space align="center">
                  <Col span={6}>
                    <Space>
                      <Image
                        src={p.image}
                        width={50}
                      />
                      <Block>
                        <p>{p.title}</p>
                        <p>{p.category}</p>
                      </Block>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space>
                      <InputNumber
                        min={1}
                        max={10}
                        value={p.quantity}
                        // onChange={setValue}
                      />
                      <Button
                        type="primary"
                        // onClick={() => {
                        //   setValue(1);
                        // }}
                      >
                        Reset
                      </Button>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Button>
                      <TrashIcon style={{ height: "12px", width: "12px" }} />
                    </Button>
                  </Col>
                </Space>
              </Row>
            );
          })}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
