import { Button as AntdButton } from 'antd'

const Button = ({ children, ...props }) => {
  return <AntdButton {...props}>{children}</AntdButton>
}

export default Button
