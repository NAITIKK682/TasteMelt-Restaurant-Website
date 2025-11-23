import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Users, ShoppingCart, DollarSign, TrendingUp, Calendar, ChefHat, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import menuData from '../data/menu.json'
import reviewsData from '../data/reviews.json'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState('dashboard')
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem('adminToken')
    if (token === 'admin-token-123') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    setLoginError('')

    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      localStorage.setItem('adminToken', 'admin-token-123')
      setIsAuthenticated(true)
    } else {
      setLoginError('Invalid username or password')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    setIsAuthenticated(false)
    setLoginData({ username: '', password: '' })
    navigate('/')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <div className="text-center mb-6">
            <ChefHat className="h-12 w-12 text-saffron mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800">Admin Access</h1>
            <p className="text-gray-600 mt-2">Enter your credentials to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"
                required
              />
            </div>

            {loginError && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-saffron text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2 transition-colors font-semibold"
            >
              Login to Admin Panel
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-saffron text-sm"
            >
              ← Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    )
  }



  const stats = [
    { title: 'Total Orders', value: '1,247', icon: ShoppingCart, change: '+12%' },
    { title: 'Revenue', value: '₹2,45,000', icon: DollarSign, change: '+8%' },
    { title: 'Customers', value: '892', icon: Users, change: '+15%' },
    { title: 'Avg Rating', value: '4.8', icon: TrendingUp, change: '+0.2' }
  ]

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', items: 3, total: '₹450', status: 'Completed' },
    { id: '#1235', customer: 'Jane Smith', items: 2, total: '₹320', status: 'Preparing' },
    { id: '#1236', customer: 'Mike Johnson', items: 4, total: '₹680', status: 'Delivered' },
    { id: '#1237', customer: 'Sarah Wilson', items: 1, total: '₹180', status: 'Pending' }
  ]

  const topDishes = menuData.slice(0, 5).map(dish => ({
    ...dish,
    orders: Math.floor(Math.random() * 50) + 10
  }))

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          Admin Dashboard
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </motion.button>
      </div>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg"
      >
        {['dashboard', 'orders', 'menu', 'customers', 'analytics'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md capitalize transition-colors ${
              activeTab === tab
                ? 'bg-saffron text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {activeTab === 'dashboard' && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-green-500 text-sm">{stat.change} from last month</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-saffron" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Recent Orders & Top Dishes */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
              <div className="space-y-4">
                {recentOrders.map(order => (
                  <div key={order.id} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-semibold">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{order.total}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'Preparing' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'Delivered' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Dishes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-4">Top Selling Dishes</h2>
              <div className="space-y-4">
                {topDishes.map(dish => (
                  <div key={dish.id} className="flex items-center space-x-4">
                    <img
                      src={dish.image || 'https://via.placeholder.com/50x50?text=Dish'}
                      alt={dish.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{dish.name}</p>
                      <p className="text-sm text-gray-600">{dish.orders} orders</p>
                    </div>
                    <p className="font-semibold text-saffron">₹{dish.price}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Customer Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold mb-4">Recent Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviewsData.map(review => (
                <div key={review.id} className="border rounded-lg p-4">
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-2">"{review.comment}"</p>
                  <p className="font-semibold text-sm">{review.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {activeTab === 'orders' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Order Management</h2>
          <p className="text-gray-600">Order management interface would go here</p>
        </motion.div>
      )}

      {activeTab === 'menu' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Menu Management</h2>
          <p className="text-gray-600">Menu editing interface would go here</p>
        </motion.div>
      )}

      {activeTab === 'customers' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Customer Management</h2>
          <p className="text-gray-600">Customer management interface would go here</p>
        </motion.div>
      )}

      {activeTab === 'analytics' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Analytics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-12 w-12 text-gray-400" />
              <span className="ml-2 text-gray-500">Sales Chart</span>
            </div>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <Users className="h-12 w-12 text-gray-400" />
              <span className="ml-2 text-gray-500">Customer Analytics</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Admin
