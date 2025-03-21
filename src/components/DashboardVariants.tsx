
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, PieChart, AreaChart, LineChart, Bar, Pie, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Users, TrendingUp, Activity, ArrowUpRight, PieChart as PieChartIcon, BarChart as BarChartIcon } from "lucide-react";

// Sample data
const salesData = [
  { month: 'Jan', sales: 65000, target: 60000 },
  { month: 'Feb', sales: 59000, target: 60000 },
  { month: 'Mar', sales: 80000, target: 60000 },
  { month: 'Apr', sales: 81000, target: 60000 },
  { month: 'May', sales: 56000, target: 60000 },
  { month: 'Jun', sales: 55000, target: 60000 },
  { month: 'Jul', sales: 40000, target: 60000 },
];

const pieData = [
  { name: 'Software', value: 35 },
  { name: 'Hardware', value: 25 },
  { name: 'Services', value: 20 },
  { name: 'Training', value: 15 },
  { name: 'Other', value: 5 },
];

const teamData = [
  { name: 'Sarah', performance: 94 },
  { name: 'Michael', performance: 87 },
  { name: 'Jessica', performance: 82 },
  { name: 'David', performance: 76 },
  { name: 'Alex', performance: 68 },
];

const conversionData = [
  { month: 'Jan', rate: 12 },
  { month: 'Feb', rate: 19 },
  { month: 'Mar', rate: 15 },
  { month: 'Apr', rate: 17 },
  { month: 'May', rate: 13 },
  { month: 'Jun', rate: 21 },
  { month: 'Jul', rate: 24 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// Modern Dark Variant
export const DarkMinimalistDashboard = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sales Analytics</h1>
        <div className="flex gap-4">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all">All Teams</SelectItem>
              <SelectItem value="sales">Sales Team</SelectItem>
              <SelectItem value="marketing">Marketing Team</SelectItem>
              <SelectItem value="support">Support Team</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Total Sales</p>
                <h3 className="text-2xl font-bold mt-1">$436,000</h3>
                <p className="text-green-400 text-sm flex items-center mt-1">
                  <ArrowUpRight size={16} className="mr-1" />
                  +12.5% from last period
                </p>
              </div>
              <div className="p-3 bg-blue-900/30 rounded-full">
                <TrendingUp size={20} className="text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Conversion Rate</p>
                <h3 className="text-2xl font-bold mt-1">24.8%</h3>
                <p className="text-green-400 text-sm flex items-center mt-1">
                  <ArrowUpRight size={16} className="mr-1" />
                  +3.2% from last period
                </p>
              </div>
              <div className="p-3 bg-purple-900/30 rounded-full">
                <Activity size={20} className="text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Total Customers</p>
                <h3 className="text-2xl font-bold mt-1">8,642</h3>
                <p className="text-green-400 text-sm flex items-center mt-1">
                  <ArrowUpRight size={16} className="mr-1" />
                  +5.3% from last period
                </p>
              </div>
              <div className="p-3 bg-green-900/30 rounded-full">
                <Users size={20} className="text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Avg. Deal Size</p>
                <h3 className="text-2xl font-bold mt-1">$8,294</h3>
                <p className="text-red-400 text-sm flex items-center mt-1">
                  <ArrowUpRight size={16} className="mr-1 rotate-180" />
                  -2.1% from last period
                </p>
              </div>
              <div className="p-3 bg-amber-900/30 rounded-full">
                <PieChartIcon size={20} className="text-amber-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
            <CardDescription className="text-gray-400">Monthly sales vs target</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', border: 'none' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Bar dataKey="sales" name="Sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" name="Target" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
            <CardDescription className="text-gray-400">Distribution of sales by product category</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', border: 'none' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Conversion Rate Trend</CardTitle>
            <CardDescription className="text-gray-400">Monthly conversion rate (%)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', border: 'none' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="rate" 
                  name="Conversion Rate" 
                  stroke="#10b981" 
                  strokeWidth={2} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
            <CardDescription className="text-gray-400">Individual performance scores</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                layout="vertical"
                data={teamData}
                margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis type="number" stroke="#888" />
                <YAxis dataKey="name" type="category" stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', border: 'none' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar 
                  dataKey="performance" 
                  name="Performance Score" 
                  radius={[0, 4, 4, 0]}
                >
                  {teamData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={
                      entry.performance >= 90 ? '#10b981' :
                      entry.performance >= 80 ? '#3b82f6' :
                      entry.performance >= 70 ? '#f59e0b' :
                      '#ef4444'
                    } />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Gradient Modern Variant
export const GradientModernDashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Sales Dashboard
        </h1>
        <div className="flex gap-4">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px] bg-white/10 backdrop-blur-sm border-white/20">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800/95 border-gray-700">
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] bg-white/10 backdrop-blur-sm border-white/20">
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800/95 border-gray-700">
              <SelectItem value="all">All Teams</SelectItem>
              <SelectItem value="sales">Sales Team</SelectItem>
              <SelectItem value="marketing">Marketing Team</SelectItem>
              <SelectItem value="support">Support Team</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <TrendingUp size={22} className="text-blue-400" />
            </div>
            <span className="text-xs font-medium bg-green-500/20 text-green-300 py-1 px-2 rounded-full flex items-center">
              +12.5% <ArrowUpRight size={12} className="ml-1" />
            </span>
          </div>
          <h3 className="text-sm text-white/70">Total Sales</h3>
          <p className="text-3xl font-bold mt-1">$436,000</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <Activity size={22} className="text-purple-400" />
            </div>
            <span className="text-xs font-medium bg-green-500/20 text-green-300 py-1 px-2 rounded-full flex items-center">
              +3.2% <ArrowUpRight size={12} className="ml-1" />
            </span>
          </div>
          <h3 className="text-sm text-white/70">Conversion Rate</h3>
          <p className="text-3xl font-bold mt-1">24.8%</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <div className="p-3 bg-pink-500/20 rounded-lg">
              <Users size={22} className="text-pink-400" />
            </div>
            <span className="text-xs font-medium bg-green-500/20 text-green-300 py-1 px-2 rounded-full flex items-center">
              +5.3% <ArrowUpRight size={12} className="ml-1" />
            </span>
          </div>
          <h3 className="text-sm text-white/70">Total Customers</h3>
          <p className="text-3xl font-bold mt-1">8,642</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <div className="p-3 bg-amber-500/20 rounded-lg">
              <PieChartIcon size={22} className="text-amber-400" />
            </div>
            <span className="text-xs font-medium bg-red-500/20 text-red-300 py-1 px-2 rounded-full flex items-center">
              -2.1% <ArrowUpRight size={12} className="ml-1 rotate-180" />
            </span>
          </div>
          <h3 className="text-sm text-white/70">Avg. Deal Size</h3>
          <p className="text-3xl font-bold mt-1">$8,294</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-6 lg:col-span-8">
          <h2 className="text-xl font-bold mb-6">Sales Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.7)' }} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.7)' }} />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(23, 23, 23, 0.8)', backdropFilter: 'blur(12px)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} 
                itemStyle={{ color: '#fff' }}
              />
              <Area type="monotone" dataKey="sales" stroke="#3b82f6" fillOpacity={0.6} fill="url(#colorSales)" />
              <Area type="monotone" dataKey="target" stroke="#8b5cf6" fillOpacity={0.3} fill="url(#colorTarget)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-6 lg:col-span-4">
          <h2 className="text-xl font-bold mb-6">Sales by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(23, 23, 23, 0.8)', backdropFilter: 'blur(12px)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} 
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-6">
          <h2 className="text-xl font-bold mb-6">Conversion Rate Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={conversionData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.7)' }} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.7)' }} />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(23, 23, 23, 0.8)', backdropFilter: 'blur(12px)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} 
                itemStyle={{ color: '#fff' }}
              />
              <Line 
                type="monotone" 
                dataKey="rate" 
                stroke="#10b981" 
                strokeWidth={3} 
                dot={{ r: 6, fill: '#10b981', strokeWidth: 0 }}
                activeDot={{ r: 8, fill: '#059669', strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-6">
          <h2 className="text-xl font-bold mb-6">Team Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              layout="vertical"
              data={teamData}
              margin={{ top: 0, right: 0, left: 40, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.7)' }} />
              <YAxis dataKey="name" type="category" tick={{ fill: 'rgba(255,255,255,0.7)' }} />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(23, 23, 23, 0.8)', backdropFilter: 'blur(12px)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} 
                itemStyle={{ color: '#fff' }}
              />
              <Bar 
                dataKey="performance" 
                radius={[0, 4, 4, 0]}
              >
                {teamData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`rgba(${59 + index * 30}, ${130 - index * 5}, ${246 - index * 15}, 0.9)`} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// Minimal Light Variant
export const MinimalLightDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 text-gray-900 min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500 mt-1">Summary of your sales performance</p>
        </div>
        <div className="flex gap-4">
          <Tabs defaultValue="month" className="w-[400px]">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="quarter">Quarter</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500">Revenue</span>
              <div className="flex items-end justify-between mt-1">
                <span className="text-3xl font-bold">$436,000</span>
                <span className="text-sm text-green-600 flex items-center">
                  +12.5%
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </span>
              </div>
              <div className="w-full bg-gray-200 h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-1 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">75% of target</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500">Conversion</span>
              <div className="flex items-end justify-between mt-1">
                <span className="text-3xl font-bold">24.8%</span>
                <span className="text-sm text-green-600 flex items-center">
                  +3.2%
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </span>
              </div>
              <div className="w-full bg-gray-200 h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-1 rounded-full" style={{ width: '88%' }}></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">88% of target</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500">Customers</span>
              <div className="flex items-end justify-between mt-1">
                <span className="text-3xl font-bold">8,642</span>
                <span className="text-sm text-green-600 flex items-center">
                  +5.3%
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </span>
              </div>
              <div className="w-full bg-gray-200 h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-green-500 h-1 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">92% of target</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500">Avg. Deal</span>
              <div className="flex items-end justify-between mt-1">
                <span className="text-3xl font-bold">$8,294</span>
                <span className="text-sm text-red-600 flex items-center">
                  -2.1%
                  <svg className="w-3 h-3 ml-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </span>
              </div>
              <div className="w-full bg-gray-200 h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-1 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">65% of target</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="sales" name="Sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" name="Target" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Conversion Rate Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="rate" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: '#059669', strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                layout="vertical"
                data={teamData}
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" horizontal={false} />
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar 
                  dataKey="performance" 
                  radius={[0, 4, 4, 0]}
                >
                  {teamData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={
                        entry.performance >= 90 ? '#10b981' :
                        entry.performance >= 80 ? '#3b82f6' :
                        entry.performance >= 70 ? '#f59e0b' :
                        '#ef4444'
                      } 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Dashboard Variant Selector Component
const DashboardVariants = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Variants</h1>
      
      <div className="grid grid-cols-1 gap-6">
        <Card className="overflow-hidden">
          <div className="bg-gray-100 p-4 border-b">
            <h2 className="text-lg font-medium">Dark Minimalist Dashboard</h2>
          </div>
          <div className="h-[300px] overflow-auto">
            <DarkMinimalistDashboard />
          </div>
          <div className="p-4 flex justify-end">
            <Button>Select This Style</Button>
          </div>
        </Card>
        
        <Card className="overflow-hidden">
          <div className="bg-gray-100 p-4 border-b">
            <h2 className="text-lg font-medium">Gradient Modern Dashboard</h2>
          </div>
          <div className="h-[300px] overflow-auto">
            <GradientModernDashboard />
          </div>
          <div className="p-4 flex justify-end">
            <Button>Select This Style</Button>
          </div>
        </Card>
        
        <Card className="overflow-hidden">
          <div className="bg-gray-100 p-4 border-b">
            <h2 className="text-lg font-medium">Minimal Light Dashboard</h2>
          </div>
          <div className="h-[300px] overflow-auto">
            <MinimalLightDashboard />
          </div>
          <div className="p-4 flex justify-end">
            <Button>Select This Style</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardVariants;
