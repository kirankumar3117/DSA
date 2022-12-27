package dsaLearning.com;

import java.util.Scanner;

public class Main {

	static HowManyTimesNumberPresent h1=new HowManyTimesNumberPresent();
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		System.out.println("Please enter the n  : ");
		int n=sc.nextInt();
		System.out.println("Please enter the n  : ");	
		int gn=sc.nextInt();
		int count=h1.find(n, gn);
		System.out.println(count);
		

	}

}
