'use client'
import React, { useEffect, useState } from 'react';

const AnimatedCounter = ({ start, end, suffix, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let currentCount = start;
    const increment = Math.ceil(end / (duration / 10));

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= end) {
        clearInterval(interval);
        currentCount = end;
      }
      setCount(currentCount);
    }, 10);

    return () => clearInterval(interval);
  }, [start, end, duration]);

  return (
    <dd className="order-1 text-5xl font-extrabold leading-none text-gray-800 dark:text-gray-700">
      {count}{suffix}
    </dd>
  );
};

const StatsSection = () => {
  const targets = [
    { title: 'Customers', count: 1000, suffix: '+', id: 'starsCount' },
    { title: 'Connections', count: 8000, suffix: '+', id: 'downloadsCount' },
    { title: 'Sponsors', count: 100, suffix: '+', id: 'sponsorsCount' },
  ];

  return (
      <div className="pt-12 bg-gray-50 dark:bg-white sm:pt-20">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl drop-shadow-lg font-extrabold leading-9 text-gray-black text-black sm:text-4xl sm:leading-10">
              Trusted by Customers
            </h2>
            <p className="mt-3 text-xl leading-7 text-gray-600 dark:text-gray-400 sm:mt-4">
              This Service one of the best for you. Because we try our best to fulfill the needs of the Customers.
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-gray-50 dark:bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-white"></div>
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white dark:bg-gray-100 rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  {targets.map((target) => (
                    <div
                      key={target.id}
                      className="flex flex-col p-6 text-center text-black border-b border-gray-100 dark:border-gray-300 sm:border-0 sm:border-r"
                    >
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-black-500 dark:text-gray-600">
                        {target.title}
                      </dt>
                      <AnimatedCounter start={0} end={target.count} suffix={target.suffix} duration={2000} />
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default StatsSection;
