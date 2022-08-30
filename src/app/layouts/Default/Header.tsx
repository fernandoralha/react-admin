import { Layout, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import Logo from '../../components/Logo/Logo';

const { Header } = Layout;

export default function DefaultLayoutHeader() {
  return (
    <Header className='header'>
      <Row
        justify='space-between'
        style={{
          height: '100%',
          maxWidth: 1190,
          margin: '0 auto',
        }}
        align='middle'
      >
        <Logo/>
        <Avatar />
      </Row>
    </Header>
  );
}
