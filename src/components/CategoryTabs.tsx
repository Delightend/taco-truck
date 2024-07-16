import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {  Grid } from '@mui/material';
import Product from './Product';
import { MenuItem } from '../types/MenuItem';
import { CartItemType } from '../types/CartItemType';

interface CategoryTabsProps {
  categories: string[],
  tacos: MenuItem[],
  drinks: MenuItem[],
  addToCart: (clickedItem: CartItemType) => void,
  removeFromCart: (id: string) => void,
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
};

export default function CategoryTabs({
  categories,
  tacos,
  drinks,
  addToCart,
  removeFromCart,
}: CategoryTabsProps) {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
        centered
      >
        {categories?.map((category: string, index: number) => (
          
          <Tab label={category} {...a11yProps(index)} sx={{fontSize: 24}} />
        ))}
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container spacing={2}>
          {tacos.map(item => (
            <Grid item xs={6}>
              <Product
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </Grid>
          ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid container spacing={2}>
          {drinks.map(item => (
             <Product
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
          ))}
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
