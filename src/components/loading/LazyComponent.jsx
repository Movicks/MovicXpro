import  { Suspense } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../utils/Loader';

export const LazyComponent = ({ Component }) => (
  <div class="w-full h-screen flex items-center justify-center">
    <Suspense fallback={<Loader />}>
        <Component />
    </Suspense>
  </div>
);

// Defined prop types (similar to TypeScript interfaces)
LazyComponent.propTypes = {
  Component: PropTypes.elementType.isRequired,
};