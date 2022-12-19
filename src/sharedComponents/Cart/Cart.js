import { Modal, Row, Col, Image, Space, InputNumber, Button } from "antd";
import Block from "react-blocks";
import Layout from "antd/es/layout/layout";
import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Cart = ({ isCartOpen, onOpenCart, products, onAddToCart, onDeleteProduct }) => {
  const handleProductActions = (e) => {
    const productId = e.target.closest(".product");
    const btn = e.target.closest("button");


    if (!btn) return;

    if (btn.dataset.type === "delete") {
      console.log("the id of the product is ", productId.dataset.productid)
      onDeleteProduct(+productId.dataset.productid)
    }
  };
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
              <Row
                justify="center"
                data-productId={p.id}
                onClick={handleProductActions}
                className="product"
              >
                <Space align="center">
                  <Col span={6}>
                    <Space>
                      <Image src={p.image} width={50} />
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
                        data-type="reset"
                      >
                        Reset
                      </Button>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Button data-type="delete">
                      <TrashIcon style={{ height: "12px", width: "12px" }} />
                    </Button>
                  </Col>
                </Space>
              </Row>
            );
          })}
        </Modal>
      ) : (
        <Modal
          open={isCartOpen}
          onCancel={(e) => onOpenCart(e, false)}
          footer={[]}
        >
          <p>there is no products yet!</p>
          <p>what are you waiting for add product!</p>
          <Link to="/shop">shop now</Link>
        </Modal>
      )}
    </>
  );
};

export default Cart;
