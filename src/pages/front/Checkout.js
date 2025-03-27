import { Link, useOutletContext, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CustomInput } from '../../components/FormElements'
import axios from 'axios'

function Checkout() {
  const { cartData } = useOutletContext()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onTouched'
  })

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const { name, email, tel, address } = data
    console.log(name, email, tel, address)
    const form = {
      data: {
        user: {
          name,
          email,
          tel,
          address
        }
      }
    }
    const res = await axios.post(
      `/v2/api/${process.env.REACT_APP_API_PATH}/order`,
      form
    )
    console.log('Submit order res', res)
    navigate(`/success/${res.data.orderId}`)
  }

  return (
    <div className="bg-light pt-5 pb-7">
      <div className="container">
        <div className="row justify-content-center flex-md-row flex-column-reverse">
          <form className="col-md-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white p-4">
              <h4 className="fw-bold">訂單資料</h4>
              <div className="mb-2">
                <CustomInput
                  id="email"
                  labelText="Email"
                  type="email"
                  errors={errors}
                  register={register}
                  rules={{
                    required: 'Email 為必填',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Email 格式不正確'
                    }
                  }}
                ></CustomInput>
              </div>
              <div className="mb-2">
                <CustomInput
                  id="name"
                  type="text"
                  errors={errors}
                  labelText="姓名"
                  register={register}
                  rules={{
                    required: '姓名為必填',
                    maxLength: {
                      value: 10,
                      message: '姓名長度不超過 10'
                    }
                  }}
                ></CustomInput>
              </div>
              <div className="mb-2">
                <CustomInput
                  id="tel"
                  labelText="聯絡電話"
                  type="tel"
                  errors={errors}
                  register={register}
                  rules={{
                    required: '聯絡電話為必填',
                    minLength: {
                      value: 6,
                      message: '聯絡電話不少於 6 碼'
                    },
                    maxLength: {
                      value: 12,
                      message: '聯絡電話不超過 12 碼'
                    }
                  }}
                ></CustomInput>
              </div>
              <div className="mb-2">
                <CustomInput
                  id="address"
                  labelText="外送地址"
                  type="address"
                  errors={errors}
                  register={register}
                  rules={{
                    required: '外送地址為必填'
                  }}
                ></CustomInput>
              </div>
            </div>
            <div className="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
              <Link className="text-dark mt-md-0 mt-3" to="/cart">
                <i className="bi bi-chevron-left me-2"></i> 繼續購物
              </Link>
              <button
                type="submit"
                className="btn btn-dark py-3 px-7 rounded-0"
              >
                送出表單
              </button>
            </div>
          </form>

          <div className="col-md-4">
            <div className="border p-4 mb-4">
              <h4 className="mb-4">選購商品</h4>
              {cartData?.carts?.map((item) => {
                return (
                  <div className="d-flex" key="item.id">
                    <img
                      src={item.product.imageUrl}
                      alt=""
                      className="me-2"
                      style={{
                        width: '48px',
                        height: '48px',
                        objectFit: 'cover'
                      }}
                    />
                    <div className="w-100">
                      <div className="d-flex justify-content-between fw-bold">
                        <p className="mb-0">{item.product.title}</p>
                        <p className="mb-0">x{item.qty}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-muted mb-0">
                          <small>NT$ {item.product.price}</small>
                        </p>
                        <p className="mb-0">NT$ {item.final_total}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
              <div className="d-flex justify-content-between mt-4">
                <p className="mb-0 h4 fw-bold">Total</p>
                <p className="mb-0 h4 fw-bold">NT$ {cartData.final_total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
