jest.mock('../middlewares/authMiddleware', () => ({
  requireAuth: (req, res, next) => {
    req.user = { _id: "fake_user_id" };
    next();
  },
  userVerification: (req, res) => res.json({status: true})
}));

const request = require("supertest");
const app = require("../index");
const { OrdersModel } = require("../model/OrdersModel");
const { HoldingsModel } = require("../model/HoldingsModel");

jest.mock("../model/OrdersModel");
jest.mock("../model/HoldingsModel");

describe("POST /newOrder API Test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should place a new order successfully and create a new holding", async () => {
    // Mock the save function for new Order
    const mockOrderSave = jest.fn().mockResolvedValue(true);
    OrdersModel.mockImplementation(() => ({
      save: mockOrderSave
    }));
    
    // Simulate that the user has NO existing holding for this stock
    HoldingsModel.findOne.mockResolvedValue(null);
    
    const mockHoldingSave = jest.fn().mockResolvedValue(true);
    HoldingsModel.mockImplementation(() => ({
      save: mockHoldingSave
    }));

    const response = await request(app)
      .post("/newOrder")
      .send({
        name: "RELIANCE",
        qty: 5,
        price: 2500,
        mode: "BUY"
      });

    // Verify response
    expect(response.status).toBe(200);
    expect(response.text).toBe("Order saved!");

    // Verify database mocks were called correctly
    expect(OrdersModel).toHaveBeenCalledTimes(1);
    expect(mockOrderSave).toHaveBeenCalledTimes(1);
    
    expect(HoldingsModel.findOne).toHaveBeenCalledWith({
      name: "RELIANCE",
      user: "fake_user_id"
    });
    
    expect(HoldingsModel).toHaveBeenCalledTimes(1);
    expect(mockHoldingSave).toHaveBeenCalledTimes(1);
  });
});
