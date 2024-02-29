import User from '../models/User.js';

class SocketService {
  connection(socket) {
    console.log(`Socket connect with id: ${socket.id}`);

    socket.on('create-order', async payload => {
      const user = await User.findOne({ phone: payload?.phone });

      user && global._io.emit(`notification-user-${user._id.toString()}`, {
        message: 'Bạn vừa đặt 1 đơn'
      });

      payload?.shipperId && global._io.emit(`notification-user-${payload.shipperId}`, {
        message: 'Bạn vừa có 1 đơn hàng mới'
      });
    });
  }
}

export default new SocketService();
