'use client';

import * as React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function Page() {
  return (
    <div>
      <nav style={{ display: 'flex', padding: '10px' }}>
        <Link href="/">
          <ShoppingCart />
        </Link>
        <div style={{ marginLeft: 'auto' }}>
          <Link href="#" style={{ marginRight: '10px' }}>
            Features
          </Link>
          <Link href="#" style={{ marginRight: '10px' }}>
            Pricing
          </Link>
          <Link href="#" style={{ marginRight: '10px' }}>
            About
          </Link>
          <Link href="#">Contact</Link>
        </div>
      </nav>

      <main style={{ padding: '20px' }}>
        <h1
          style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}
        >
          Revolutionize Your Cycling Experience
        </h1>
        <p style={{ marginBottom: '20px' }}>
          Discover our cutting-edge bicycles designed for performance, comfort,
          and style.
        </p>

        <div style={{ marginBottom: '20px' }}>
          <button
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '8px 16px',
              marginRight: '10px',
            }}
          >
            Get Started
          </button>
          <button
            style={{
              border: '1px solid black',
              padding: '8px 16px',
            }}
          >
            Learn More
          </button>
        </div>

        <h2
          style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}
        >
          Our Featured Bikes
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {[
            { name: 'Mountain Explorer', price: '$1,299' },
            { name: 'City Cruiser', price: '$899' },
            { name: 'Speed Demon', price: '$2,499' },
          ].map((bike) => (
            <div key={bike.name}>
              <div
                style={{
                  backgroundColor: '#eee',
                  height: '200px',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Image
              </div>
              <h3 style={{ fontWeight: 'bold' }}>{bike.name}</h3>
              <p style={{ marginBottom: '10px' }}>{bike.price}</p>
              <button
                style={{
                  border: '1px solid black',
                  padding: '8px 16px',
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        <h2
          style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}
        >
          Why Choose Us
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Quality Assurance
            </h3>
            <p>
              Our bikes are built with premium materials and undergo rigorous
              testing.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Fast Delivery
            </h3>
            <p>
              We ensure quick and safe delivery of your new bike right to your
              doorstep.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Easy Returns
            </h3>
            <p>
              Not satisfied? Return your bike within 30 days for a full refund.
            </p>
          </div>
        </div>

        <h2
          style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}
        >
          Ready to Ride?
        </h2>
        <p style={{ marginBottom: '20px' }}>
          Join thousands of satisfied cyclists and experience the joy of riding
          a premium bicycle.
        </p>
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '8px 16px',
            width: '100%',
            marginBottom: '10px',
          }}
        >
          Shop Now
        </button>
        <button
          style={{
            border: '1px solid black',
            padding: '8px 16px',
            width: '100%',
          }}
        >
          Contact Sales
        </button>
      </main>

      <footer style={{ padding: '20px', borderTop: '1px solid #eee' }}>
        <p style={{ fontSize: '14px', marginBottom: '10px' }}>
          © 2024 Acme Bicycles. All rights reserved.
        </p>
        <div>
          <Link href="#" style={{ fontSize: '14px', marginRight: '20px' }}>
            Terms of Service
          </Link>
          <Link href="#" style={{ fontSize: '14px' }}>
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}
