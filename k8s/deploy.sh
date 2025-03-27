#!/bin/bash

# Create namespace if it doesn't exist
kubectl create namespace portfolio-app --dry-run=client -o yaml | kubectl apply -f -

# Apply ConfigMap
kubectl apply -f configmap.yaml -n portfolio-app

# Apply Deployment
kubectl apply -f deployment.yaml -n portfolio-app

# Apply Service
kubectl apply -f service.yaml -n portfolio-app

# Wait for deployment to be ready
echo "Waiting for deployment to be ready..."
kubectl wait --for=condition=available --timeout=300s deployment/portfolio-app -n portfolio-app

# Get the service URL
echo "Getting service URL..."
kubectl get service portfolio-app-service -n portfolio-app -o jsonpath='{.status.loadBalancer.ingress[0].ip}' 