import React from 'react';
import MockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {render} from '@testing-library/react-native';
import App from '../App';

jest.mock('@react-native-async-storage/async-storage', () => MockAsyncStorage);

it('renders correctly', () => {
  render(<App />);
});
